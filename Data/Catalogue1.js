var catalog1 = [
{"id" : "1", "name" : "Hyper X Cloud II", "description" : "Casque de jeu compatible PC/XBOX/PS4", "price" : "80"},
{"id" : "2", "name" : "CoolerMaster CK550", "description" : "Clavier gaming de très bonne qualité", "price" : "69.90"},
{"id" : "3", "name" : "Samsung SSD 970 PRO M.2 PCIe NVMe 1 To", "description" : "SSD NVMe de 1 Téraoctet de très haute perfomance", "price" : "379.94"},
{"id" : "4", "name" : "AMD Ryzen 5 3600 Wraith Stealth (3.6 GHz / 4.2 GHz)", "description" : "Processeur pour carte mère de socket AM4", "price" : "239€95"},
{"id" : "5", "name" : "Netgear GS108", "description" : "Switch Gigabit 8 ports 10/100/1000 Mbps", "price" : "32.99"},
{"id" : "6", "name" : "Pack XBOX One", "description" : "Microsoft Xbox One S All Digital (1 To) + Minecraft + Fortnite + Sea of Thieves", "price" : "169.95"},
{"id" : "7", "name" : "Panasonic TX-65FZ950E", "description" : "Téléviseur OLED 4K Ultra HD 65\" (165 cm) 16/9 - 3840 x 2160 pixels - THX 4K - HDR - Wi-Fi - Bluetooth - Barre de son Technics intégrée 80W (dalle native 100 Hz)", "price" : "1699"},
{"id" : "8", "name" : "MSI GeForce RTX 2060 SUPER GAMING X", "description" : "8 Go GDDR6 - HDMI/Tri DisplayPort - PCI Express (NVIDIA GeForce RTX 2060 SUPER)", "price" : "479.95"},
{"id" : "9", "name" : "ASUS F1", "description" : "Vidéoprojecteur LED/DLP 3D Ready - Full HD (1920 x 1080) - 1200 Lumens - Focale courte - Autofocus - HDMI/USB - Wi-Fi - Son 2.1 Harman/Kardon", "price" : "849.95"},
{"id" : "10", "name" : "Corsair Carbide SPEC-DELTA RGB TG Noir", "description" : "Boîtier moyen tour avec fenêtre latérale en verre trempé et ventilateurs RGB", "price" : "74.95"}
];
var cats = document.getElementById("catalogues");
var catname = document.createElement("option");
catname.text = "Catalogue High Tec";
cats.add(catname);