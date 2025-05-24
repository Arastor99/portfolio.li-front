import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "@common/types/profile";
import { getTemplate } from "@common/utils/templates";
import { useProfileStore } from "@store/profileStore";
import { usePortfolioStore } from "@store/portfolioStore";


interface Props {
  templateNameProps?: string;
  profileData?: Profile;
  forceMobile?: boolean;
}

const Preview: React.FC<Props> = ({ templateNameProps, profileData, forceMobile }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [templateName, setTemplateName] = useState<string>("");

  const navigate = useNavigate();

  const profileStore = useProfileStore((state) => state.profileStore);
  const portfolioStore = usePortfolioStore((state) => state.portfolioStore);

  useEffect(() => {
    // 1. Si vienen props, usarlas
    if (profileData && templateNameProps) {
      setProfile(profileData);
      setTemplateName(templateNameProps);
    }
    // 2. Si no vienen props, usar Zustand
    else if (profileStore && portfolioStore?.template) {
      setProfile(profileStore);
      setTemplateName(String(portfolioStore.template));
    }
    // 3. Si no hay nada, redirigir
    else {
      navigate("/home", { replace: true });
    }
  }, [profileData, templateNameProps, profileStore, portfolioStore, navigate]);

  if (!profile || !templateName) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Cargando vista previa...</p>
      </div>
    );
  }

  return <div>{getTemplate(templateName, profile, forceMobile)}</div>;
};

export default Preview;
