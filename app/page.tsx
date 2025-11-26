
import { Vote } from "./components/vote";
export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8">
      <h1>Daily Emoji Vote</h1>
      <div>
        <p>A battle between 2 random emojis</p>
      </div>
      <Vote />
    </div>
  );
}
