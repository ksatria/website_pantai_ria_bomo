import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Counter } from "counterapi"; // perlu dipasang via npm
import { footer_translations } from "@/utils/footer_translations";

export default function PengunjungCard({ language = "id" }) {
  const [today, setToday] = useState(0);
  const [total, setTotal] = useState(0);
  const t = footer_translations[language];

  useEffect(() => {
    const counter = new Counter({ workspace: "bojog" });

    // Hit total global
    counter
      .up("pantai-ria-bomo")
      .then((res) => setTotal(res.value))
      .catch((err) => console.error("Error hit total:", err));

    // Hit khusus hari ini
    const todayKey = `pantai-ria-bomo-${
      new Date().toISOString().split("T")[0]
    }`;
    counter
      .up(todayKey)
      .then((res) => setToday(res.value))
      .catch((err) => console.error("Error hit today:", err));
  }, []);

  return (
    <motion.div
      className="flex-1 text-sm md:text-base"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h2 className="font-semibold mb-4">{t.pengunjung}</h2>
      <ul className="space-y-2">
        <li>
          {t.hari_ini}: {today}
        </li>
        <li>
          {t.jumlah}: {total}
        </li>
      </ul>
    </motion.div>
  );
}
