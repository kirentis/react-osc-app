import { useTranslation } from "react-i18next";

function Iceberg() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container">
        <h1>{t("ICE_icebegDetectionTitle")}</h1>

        <div className="row">
          <div className="col-6">
            <p>{t("ICE_icebegDetectionContent")}</p>
          </div>

          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Iceberg;
