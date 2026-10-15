const projects = [
    {
        title: {sv: "Homelab", en: "Homelab"},
        image: "project-images/homepage-dashboard.webp",
        imageAlt: {sv: "Homepage dashboarden för min homelab", en: "The homepage dashboard for my homelab"},
        imageCaption: {
            sv: "Homepage-dashboarden med serverns resurser och alla tjänster som körs i Docker, sorterade efter användning",
            en: "The Homepage dashboard showing server resources and all services running in Docker, grouped by purpose",
        },
        description: {
            sv: "Min egen server som körs på en Raspberry Pi 5 som driver mitt smarta hem med media och nätverk. Alla tjänster körs i Docker och driftsätts med GitOps. Jag pushar till Git och Portainer uppdaterar sig automatiskt. Fjärråtkomst sker via Cloudflare Tunnel utan öppna portar och inga hemligheter hamnar i Git",
            en: "My own Raspberry Pi 5 server running my smart home, media and network. Every service runs in Docker and is deployed with GitOps. I push to Git and Portainer redeploys automatically. Remote access goes through Cloudflare Tunnel with no open ports and no secrets ever appear on Git",
        },
        tags: ["Docker", "Linux", "GitOps", "Portainer", "Cloudflare", "Home Assistant"],
        link: "https://github.com/albinkarlsson1999/homelab",
    },
    {
        title: {sv: "CO-Calendar", en: "CO-Calendar"},
        image: "project-images/co-calendar-dashboard.webp",
        imageAlt: {sv: "CO-Calendar startsida", en: "CO-Calendar main page"},
        imageCaption: {
            sv: "Månadsvyn med delade händelser och listor under, som till exempel en gemensam inköpslista",
            en: "The month view with shared events, and lists below, such as a shared shopping list",
        },
        description: {
            sv: "En kalender och listapp med öppen källkod för att planera tillsammans, byggd med en klasskamrat. Annvändare kan dela kalendrar och listor med varandra, med inloggning via signerade cookies och skydd mot XSS. Jag byggde bland annat listfunktionen och stora delar av backenden",
            en: "An open source calendar and list app for planning together, built with a classmate. Users can share calendars and lists with each other, with signed-cookie authentication and XSS-safe rendering. Among other things, I built the lists feature and big parts of the backend",
        },
        tags: ["JavaScript", "Node.js", "Express", "MariaDB"],
        link: "https://github.com/alexanderSaila/Web-Development-Project",
    },
    {
        title: {sv: "Ombyggd 3D-skrivare", en: "Modified 3D printer"},
        image: "project-images/ender5-dashboard.webp",
        imageAlt: {sv: "Skärmdump från Home Assistant som visar data från printern", en: "Screenshot from Home Assistant showing printer data"},
        imageCaption: {
            sv: "Skrivarens dashboard i Home Assistant med temperaturer och utskriftsstatus",
            en: "The printers dashboard in Home Assistant with temperatures and print status",
        },
        description: {
            sv: "En kraftigt ombyggd Ender 5 Pro med Klipper-firmware. Jag har bytt moderkort, extruder, och hotend, kalibrerat den själv och kopplat den till Home Assistant via Moonraker för att kunna övervaka utskrifter på distans",
            en: "A heavily modified Ender 5 Pro running Klipper firmware. I have replaced the mainboard, extruder and hotend, tuned it myself and connected it to Home Assistant via Moonraker to monitor prints remotely.",
        },
        tags: ["Klipper", "Hardware", "Home Assistant"],
        link: null,
    },
];

export default projects;