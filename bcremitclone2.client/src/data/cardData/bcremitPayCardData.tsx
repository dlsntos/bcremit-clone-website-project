import type { CardData } from "../../types/cardData";
import sssIcon from "src/assets/bcremit-pay-card-image/sss-icon.png";
import pagibigIcon from "src/assets/bcremit-pay-card-image/pagibig-icon.png";
import philhealthIcon from "src/assets/bcremit-pay-card-image/philhealth-icon.png";
import owwaIcon from "src/assets/bcremit-pay-card-image/owwa-icon.png";
import propertyPaymentIcon from "src/assets/bcremit-pay-card-image/house-icon.png";
import corporatePaymentIcon from "src/assets/bcremit-pay-card-image/corpo-logo.png";
import airtimeTopUpIcon from "src/assets/bcremit-pay-card-image/top-up-icon.png";
import jollibeePadalaIcon from "src/assets/bcremit-pay-card-image/jollibee-icon.png";

export const bcRemitPayRoute: CardData[] = [
  {
    title: "Social Security System",
    description: "Easily manage your monthly SSS contrtibutions and other related payments.",
    cardImage: sssIcon,
    route: "#",
  },
  {
    title: "Pag-IBIG",
    description: "Manage your monthly Pag-IBIG contributions and associated payments effectively.",
    cardImage: pagibigIcon,
    route: "#",
  },
  {
    title: "PhilHealth",
    description: "Take care of your monthly PhilHealth contributions and associated payments.",
    cardImage: philhealthIcon,
    route: "#",
  },
  {
    title: "OWWA UK",
    description: "Manage your monthly OWWA UK contributions and associated payments seamlessly.",
    cardImage: owwaIcon,
    route: "#",
  },
  {
    title: "Property Payment",
    description: "Stay updated on your monthly property payments.",
    cardImage: propertyPaymentIcon,
    route: "#",
  },
  {
    title: "Corporate Payment",
    description: "Manage your corporate payments consistently each month.",
    cardImage: corporatePaymentIcon,
    route: "#",
  },
  {
    title: "Air Top-Up Philippines",
    description: "Top up your airtime balance conviniently and regularly.",
    cardImage: airtimeTopUpIcon,
    route: "#",
  },
  {
    title: "Jollibee Padala",
    description: "Send Jollibee meals and packages to your loved ones.",
    cardImage: jollibeePadalaIcon,
    route: "#",
  },
];