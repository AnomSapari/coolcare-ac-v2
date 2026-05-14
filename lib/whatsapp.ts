export async function sendWhatsApp(phone: string, message: string) {
  try {
    // MODE TEST (tidak kirim beneran dulu)
    console.log("📩 WHATSAPP SIMULATION");
    console.log("To:", phone);
    console.log("Message:", message);

    return true;
  } catch (error) {
    console.error("WA ERROR:", error);
    return false;
  }
}