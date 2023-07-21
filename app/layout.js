

import "@/styles/globals.css";
import Nav from "@/components/nav";
// import Provider from "@/components/Provider";

export const metadata = {
  title: "teleprompter",
  description: "discover and share AI prompts",
};

const Rootlayout = ({children}) => {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
