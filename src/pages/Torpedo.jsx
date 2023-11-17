import { useTranslation } from "react-i18next";
function Torpedo() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        <h1>{t("TOR_torpedoLaunchTitle")}</h1>

        <div className="row">
          <div className="col-6">
            <p>{t("TOR_torpedoLaunchContent")}</p>
          </div>

          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Torpedo;
