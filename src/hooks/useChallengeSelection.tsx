import { useState } from "react";
import { challenges } from "@/data/challenges";
 
const useChallengeSelection = () => {
    
  // 選択中の問題（id）を状態管理
  const [currentChallengeId, setCurrentChallengeId] = useState<string | null>(null);
  
   // idから問題情報を取得
  const currentChallenge = challenges.find((c) => c.id === currentChallengeId);
 
  return {
    currentChallenge,
    setCurrentChallengeId,
  };
};
 
export default useChallengeSelection;