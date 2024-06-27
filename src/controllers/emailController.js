import emailjs from "@emailjs/browser";
import { getSubscribers } from "./subscribersController";
emailjs.init({
  publicKey: "MeMcQVi2ahZZslaG_",
});
export const sendWelcomeEmail = (email) => {
  try {
    emailjs
      .send("service_7bswvb7", "template_6lra5hu", { send_to: email })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  } catch (error) {
    console.log(error);
  }
};

export const sendNewsletter = async (title, image, description,link) => {
  try {
    const subscribers = await getSubscribers();
    const emails = subscribers.map((item) => item.email);
    const responses = await Promise.all(
      emails.map(async (email) =>
        emailjs
          .send("service_7bswvb7", "template_sv0m9yr", {
            send_to: email,
            title,
            image,
            link,
            description,
          })
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
              console.log("FAILED...", error);
            }
          )
      )
    );
    console.log(responses)
  return responses
  } catch (error) {
    console.log(error);
  }
};
