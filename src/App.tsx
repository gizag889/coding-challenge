import HomeSection from "./components/ui/Home";
import CodeEditor from "./components/ui/CodeEditor";
import useChallengeSelection from "./hooks/useChallengeSelection";
import ChallengeDetail from "./components/ui/ChallengeDetail";


export default function App() {

  const { setCurrentChallengeId, currentChallenge } = useChallengeSelection();

 
  return (
    <div className="min-h-screen grid grid-cols-2">
      {currentChallenge ? (
        <ChallengeDetail
          challenge={currentChallenge}
          results={null}
          onBack={() => setCurrentChallengeId(null)}
        />
      ) : (
        <HomeSection onChallengeSelect={setCurrentChallengeId} />
      )}
      <CodeEditor
        currentChallenge={currentChallenge}
        onRun={(code) => console.log(code)}
      />
    </div>
  );
}