import { useRouter } from "next/router";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function usePageTracking() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      TagManager.dataLayer({
        dataLayer: {
          event: "pageview",
          page: url,
        },
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}

export default usePageTracking;
