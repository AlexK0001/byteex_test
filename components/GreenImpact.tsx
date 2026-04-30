import type { FC } from "react";
import type { GreenImpact } from "@/types/contentful";

interface Props { data: GreenImpact; }

const GreenImpactSection: FC<Props> = ({ data }) => {
  const items = [
    { val: data.co2Saved,    label: "of CO2 saved",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8" stroke="#2A2996" strokeWidth="1.8" strokeLinecap="round"/><path d="M16 4l3 3-3 3" stroke="#2A2996" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
    { val: data.waterSaved,  label: "of drinking water saved",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 5 11 5 15.5C5 19.1 8.13 22 12 22C15.87 22 19 19.1 19 15.5C19 11 12 3 12 3Z" fill="#2A2996"/><path d="M8 16C8.5 14 10 13 12 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { val: data.energySaved, label: "of energy saved",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L4.5 13.5H11.5L11 22L19.5 10.5H12.5L13 2Z" fill="#2A2996"/></svg> },
  ];

  return (
    <section className="green" id="sustainability">
      <div className="wrap">
        <h2 className="green__h2">Our total green impact</h2>
        <div className="green__row">
          {items.map((it,i) => (
            <div key={i} className="green__item">
              <div className="green__icon">{it.icon}</div>
              <p className="green__val">{it.val}</p>
              <p className="green__label">{it.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenImpactSection;