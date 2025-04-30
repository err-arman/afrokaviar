
export function parseM3U(m3uText: string) {
    const lines = m3uText.split("\n");
    const channels = [];
  
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
  
      if (line.startsWith("#EXTINF")) {
        const info = line.match(/#EXTINF:-1(.*?)?,(.*)/);
        const metadata = info?.[1] ?? "";
        const name = info?.[2]?.trim() ?? "Unknown";
  
        const logoMatch = metadata.match(/tvg-logo="(.*?)"/);
        const groupMatch = metadata.match(/group-title="(.*?)"/);
  
        const logo = logoMatch?.[1] ?? "";
        const group = groupMatch?.[1] ?? "Other";
        const url = lines[i + 1]?.trim();
  
        if (url && url.startsWith("http")) {
          channels.push({ name, logo, group, url });
        }
      }
    }
  
    return channels;
  }
  