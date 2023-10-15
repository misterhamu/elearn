import Layouts from "@/components/layouts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";
import React from "react";
import "../styles/globals.scss";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </QueryClientProvider>
    </>
  );
};

export default App;
