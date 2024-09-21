const userProfile = {
  firstName: "Yaxyobek",
  lastName: "Habibulloyev",
  fullName: () => `${this.firstName} ${this.lastName}`,
  skills: ["JavaScript", "React", "CSS"],

  tags: [
    { en: "Junior", uz: "Junior" },
    { en: "Web Developer", uz: "Veb Dasturchi" },
    { en: "Junior Designer", uz: "Yosh dizayner" },
    { en: "N1 Bot", uz: "N1 Bot" },
    { en: "Human", uz: "Odam" },
  ],

  socialLinks: {
    github: "https://github.com/yaxyobekuz",
    instagram: "https://www.instagram.com/yaxyobekh.uz",
    telegram: "https://t.me/mryaxyobek",
  },

  contactInfo: {
    email: "pubgn9642@gmail.com",
    phone: "+9982000077729",

    location: {
      en: "Uzbekistan, Andijan",
      uz: "O'zbekiston, Andijon",
    },
  },
};

export default userProfile;
