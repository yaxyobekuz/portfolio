import gmailLogo from "../assets/images/icons/gmail-logo.svg";
import githubLogo from "../assets/images/icons/github-logo.svg";
import telegramLogo from "../assets/images/icons/telegram-logo.svg";
import instagramLogo from "../assets/images/icons/instagram-logo.svg";
import telephoneLogo from "../assets/images/icons/telephone-logo.svg";
import addressLogo from "../assets/images/icons/address-location.svg";

const instagramColor =
  "radial-gradient(circle farthest-corner at 35% 90%, rgba(254, 197, 100, 0.25), transparent 50%),radial-gradient(circle farthest-corner at 0 140%, rgba(254, 197, 100, 0.25), transparent 50%),radial-gradient(ellipse farthest-corner at 0 -25%, rgba(82, 88, 207, 0.25), transparent 50%),radial-gradient(ellipse farthest-corner at 20% -50%, rgba(82, 88, 207, 0.25), transparent 50%),radial-gradient(ellipse farthest-corner at 100% 0, rgba(137, 61, 194, 0.25), transparent 50%),radial-gradient(ellipse farthest-corner at 60% -20%, rgba(137, 61, 194, 0.25), transparent 50%),radial-gradient(ellipse farthest-corner at 100% 100%, rgba(217, 49, 122, 0.25), transparent),linear-gradient(rgba(101, 89, 202, 0.25), rgba(188, 49, 143, 0.25) 30%, rgba(227, 63, 95, 0.25) 50%, rgba(247, 118, 56, 0.25) 70%, rgba(254, 198, 109, 0.25) 100%)";

const userProfile = {
  firstName: "Yaxyobek",
  lastName: "Habibulloyev",
  skills: ["JavaScript", "React", "CSS"],
  fullName: () => `${userProfile.firstName} ${userProfile.lastName}`,

  tags: {
    en: ["Junior", "Web Developer", "N1 Bot", "Junior Designer", "Human"],
    uz: ["Junior", "Veb Dasturchi", "N1 Bot", "Yosh dizayner", "Odam"],
  },

  socialLinks: {
    en: [
      {
        name: "Github",
        value: "https://github.com/yaxyobekuz",
        icon: { url: githubLogo, fill: "#FFFFFF40" },
      },
      {
        name: "Instagram",
        value: "https://instagram.com/yaxyobekh.uz",
        icon: { url: instagramLogo, fill: instagramColor },
      },
      {
        name: "Telegram",
        value: "https://t.me/mryaxyobek",
        icon: { url: telegramLogo, fill: "#1B92D140" },
      },
    ],

    uz: [
      {
        name: "Github",
        value: "https://github.com/yaxyobekuz",
        icon: { url: githubLogo, fill: "#FFFFFF40" },
      },
      {
        name: "Instagram",
        value: "https://instagram.com/yaxyobekh.uz",
        icon: { url: instagramLogo, fill: instagramColor },
      },
      {
        name: "Telegram",
        value: "https://t.me/mryaxyobek",
        icon: { url: telegramLogo, fill: "#1B92D140" },
      },
    ],
  },

  contactInfo: {
    en: [
      {
        type: "email",
        name: "Email",
        value: "pubgn9642@gmail.com",
        icon: {
          url: gmailLogo,
          fill: "linear-gradient(135deg,#4286f440 15%,#ea443540 35%,#fbbc0540 65%,#34a85340)",
        },
      },
      {
        type: "tel",
        name: "Phone number",
        value: "+998200077729",
        icon: { url: telephoneLogo, fill: "#00E06C30" },
      },
      {
        type: "address",
        name: "Address",
        value: "Uzbekistan, Andijan",
        icon: { url: addressLogo, fill: "#FBBC0530" },
      },
    ],

    uz: [
      {
        type: "email",
        name: "E-pochta",
        value: "pubgn9642@gmail.com",
        icon: {
          url: gmailLogo,
          fill: "linear-gradient(135deg,#4286f440 15%,#ea443540 35%,#fbbc0540 65%,#34a85340)",
        },
      },
      {
        type: "tel",
        name: "Telefon raqam",
        value: "+998200077729",
        icon: { url: telephoneLogo, fill: "#00E06C30" },
      },
      {
        type: "address",
        name: "Manzil",
        value: "O'zbekiston, Andijon",
        icon: { url: addressLogo, fill: "#FBBC0530" },
      },
    ],
  },
};

export default userProfile;
