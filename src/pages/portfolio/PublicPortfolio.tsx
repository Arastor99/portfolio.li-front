import { getTemplate } from '@common/utils/templates';
import { getPortfolioByUrl } from '@lib/services/portfolio.service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PublicPortfolio = () => {
  const { portfolioUrl } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  const handlePortfolioUrl = async () => {
    try {
      if (!portfolioUrl) {
        throw new Error("Portfolio URL is required");
      }

      const portfolioData = await getPortfolioByUrl(portfolioUrl);
      setPortfolio(portfolioData);
    } catch (error) {
      console.error("Error al obtener el portafolio:", error);
    }
  };

  useEffect(() => {
    handlePortfolioUrl();
  }, []);


  if (!portfolio) return <p>Cargando portafolio...</p>;
  
  return (
    <div>

      {getTemplate(portfolio.template.name, portfolio.user.profile)}
    </div>
  );
};

export default PublicPortfolio;
