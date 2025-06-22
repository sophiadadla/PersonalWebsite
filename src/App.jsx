import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home2";
import { NotFound } from "./pages/NotFound2";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Toaster />
      <HashRouter basename="/PersonalWebsite">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;