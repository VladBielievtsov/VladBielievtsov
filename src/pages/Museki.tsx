import { Link } from "../components/Link";

export default function Museki() {
  return (
    <>
      <div className="flex gap-4">
        <img
          src="https://cdn.discordapp.com/app-icons/1251560717417582714/150238501fc0d8f8182d76997e524b90.png?size=256"
          alt="Museki avatar"
          className="w-24 h-24 object-cover rounded"
        />
        <div>
          <h1 className="text-2xl font-bold text-green mb-2">Museki</h1>
          <p>
            Simple music bot for discord - <Link href="/">invite</Link>
          </p>
        </div>
      </div>
      <div className="pt-4">
        <h2 className="text-xl font-bold text-green my-2">Music</h2>
        <ul>
          <li>/Play (url) - Add the sond to the queue and play it.</li>
          <li>/Next - Skip current song and start next.</li>
          <li>/Stop - Stop the music and leave the voice channel</li>
          <li>/Pause - Pause the music</li>
          <li>/Unpause - Unpause the music</li>
          <li>/Queue - Display the queue to the text chat</li>
        </ul>
      </div>
    </>
  );
}
