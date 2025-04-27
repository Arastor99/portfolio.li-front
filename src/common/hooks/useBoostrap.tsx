import { getPortfolio } from "@lib/services/portfolio.service";
import { getUserProfile } from "@lib/services/profile.service";
import { usePortfolioStore } from "@store/portfolioStore";
import { useProfileStore } from "@store/profileStore";
import { useEffect } from "react";

const useBoostrap = () => {
  const { profileStore, setProfileStore } = useProfileStore();
  const { portfolioStore, setPortfolioStore } = usePortfolioStore();

  useEffect(() => {
    if (!profileStore) {
      getUserProfile().then((profile) => {
        if (profile) {
          setProfileStore(profile);
        }
      });
    }
    if (!portfolioStore) {
      getPortfolio().then((portfolio) => {
        if (portfolio) {
          setPortfolioStore(portfolio);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return;
};

export default useBoostrap;
