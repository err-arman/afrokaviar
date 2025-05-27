import { useEffect, useMemo, useState } from "react";
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";
import logo from "/afrokaviar.png";
import Footer from "@/components/Footer";
import { Loader } from "lucide-react";
import useFetchTvChannels from "@/hooks/useFetchTvChannels";

export default function WatchTv() {
  const [displayedChannels, setDisplayedChannels] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [selectedChannel, setSelectedChannel] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("All");

  // custom hook
  const { channels, loading } = useFetchTvChannels();

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      setVisibleCount((prev) => {
        const newCount = prev + 20;
        return newCount;
      });
    }
  };

  const filtered = useMemo(() => {
    return channels?.length
      ? channels.filter(
          (c) =>
            (group === "All" || c.channel_group === group) &&
            c.channel_name.toLowerCase().includes(search.toLowerCase())
        )
      : [];
  }, [channels, group, search]);

  const getGoogleDriveImageUrl = (url: string) => {
    if (!url) return "/tv_thamb.png";
    console.log("url", url);
    // Check if it's a Google Drive URL
    if (url.includes("drive.google.com")) {
      // Extract the file ID from the URL
      // This regex handles both /file/d/ and /uc?id= formats
      const fileId =
        url.match(/\/file\/d\/([^/]+)/)?.[1] || url.match(/id=([^&]+)/)?.[1];

      if (fileId) {
        // Convert to direct download link
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
      }
    }
    console.log("url", url);
    return url;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (filtered?.length) {
      setDisplayedChannels(filtered.slice(0, visibleCount));
    } else {
      setDisplayedChannels([]);
    }
  }, [filtered, visibleCount]);

  const uniqueGroups = [
    "All",
    ...new Set(channels.map((c) => c.channel_group)),
  ];

  useEffect(() => {
    if (displayedChannels) console.log("displayedChannels", displayedChannels);
  }, [displayedChannels]);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div className="px-2 pt-5">
        <div className="max-w-5xl mx-auto text-center mb-5">
          <h1 className="mb-1 text-4xl font-bold">
            <img src={logo} alt={logo} className="w-80 h-14 mx-auto mb-10" />
          </h1>
          <h1 className="mb-1 text-4xl font-bold">Live African Channels</h1>
          <h1 className="text-gray-300 text-xl mt-4 mb-4">
            Watch real stories. Real time.
          </h1>
          <p className="text-gray-300 mt-2">
            Explore the diverse voices of the continent — live and direct from 9
            regions.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader className="animate-spin h-10 w-10 text-white" />
          </div>
        ) : null}

        {/* Filters */}
        {loading ? (
          ""
        ) : (
          <div className="max-w-5xl mx-auto mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <input
              type="text"
              placeholder="Search channels..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/2 p-2 bg-gray-800 text-white rounded-lg border border-gray-600"
            />
            <select
              value={group}
              onChange={(e) => {
                setGroup(e.target.value);
                setVisibleCount(20);
              }}
              className="w-full sm:w-1/3 p-2 bg-gray-800 text-white rounded-lg border border-gray-600"
            >
              {uniqueGroups.map((g, i) => (
                <option key={i} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Channel Grid */}

        <div
          className="max-w-5xl mx-auto overflow-y-auto mb-8"
          style={{
            maxHeight: "calc(300vh - 400px)",
            scrollbarWidth: "none" /* Firefox */,
            msOverflowStyle: "none" /* IE and Edge */,
            WebkitOverflowScrolling: "touch",
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {displayedChannels?.map((channel, index) => (
              <div
                key={index}
                onClick={() => setSelectedChannel(channel.channel_url)}
                className="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-800"
              >
                <img
                  src="/tv_thamb.png"
                  // onError={(e) => {
                  //   (e.target as HTMLImageElement).src = "/tv_thamb.png";
                  // }}
                  alt={channel.channel_name}
                  className="w-full h-40 object-cover group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="p-3">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-white font-semibold">
                        {channel.channel_name}
                      </h2>
                      <p className="text-sm text-gray-400">
                        {channel.channel_group}
                      </p>
                    </div>
                    <p className="text-sm mt-auto text-white">
                      {channel.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Player Modal */}
      {selectedChannel && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="w-full max-w-4xl p-4">
            <button
              onClick={() => setSelectedChannel(null)}
              className="text-white text-lg mb-4 hover:underline"
            >
              ← Back to channels
            </button>
            <VideoPlayer streamUrl={selectedChannel} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
