type Playlist = {
  name: string;
  imageUrl: string;
};

export default function PlaylistCarousel({ playlists }: { playlists: Playlist[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4">
        {playlists.map((playlist, index) => (
          <div key={index} className="flex-shrink-0 w-52 p-4 bg-slate-400 rounded-xl overflow-hidden">
            <img src={playlist.imageUrl} alt={playlist.name} className="w-full h-40 object-cover" />
            <p className="bg-slate-800/10 text-center mt-2">{playlist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
