import { useEffect, useState } from "react";

import ShowDiaLog from "@/components/DiaLog";

const App: React.FC<any> = () => {
  const [visableDialog, setVisableDialog] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <div className="my-app">
      <ShowDiaLog visable={visableDialog} />
      2
     
    </div>
  );
};

export default App;
