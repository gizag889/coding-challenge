import HomeSection from "./components/ui/Home";
import CodeEditor from "./components/ui/CodeEditor";
 
export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <HomeSection onChallengeSelect={(id) => console.log(id)} />
      <CodeEditor
        currentChallenge={undefined}
        onRun={(code) => console.log(code)}
      />
    </div>
  );
}