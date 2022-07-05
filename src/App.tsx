import { useEffect, useState } from "react";

import ShowDiaLog from "@/components/DiaLog";

import AlEarth from '@/components/EchartGraphics/AlEarth';

const App: React.FC<any> = () => {
  const [visableDialog, setVisableDialog] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <div className="my-app">
      <ShowDiaLog visable={visableDialog} />
      <AlEarth />
    </div>
  );
};

export default App;
