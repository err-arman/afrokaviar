import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";

const useFetchTvChannels = () => {
  const [channels, setChannels] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${
            import.meta.env.VITE_SPREADSHEET_ID
          }/values/${import.meta.env.VITE_RANGE}?key=${
            import.meta.env.VITE_SPREADSHEET_API_KEY
          }`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();

        if (result.values && result.values.length > 0) {
          const headers = result.values[0];
          const rows = result.values.slice(1);
          const formattedData = rows
            .filter(
              (row) => row && row.length > 0 && row.some((value) => value)
            )
            .map((row) => {
              const item: Record<string, any> = {};
              row.forEach((value, index) => {
                item[headers[index]] = value;
              });
              return item;
            });

          setChannels(formattedData);
        }
      } catch (err) {
        console.error("Error fetching sheet data:", err);
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Please try again later.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  return {
    channels,
    loading,
  };
};

export default useFetchTvChannels;
