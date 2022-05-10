import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useState } from "react";
import "../styles.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export const Link = () => {
  const [linkInput, setLinkInput] = useState("");
  const [shortLink, setShortLink] = useState(0);

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    console.log("link input: " + linkInput);
    axios
      .get("https://api.shrtco.de/v2/shorten?url=" + linkInput)
      .then((res) => {
        console.log("short link value: " + shortLink);
        if (shortLink === 0) {
          console.log("my response: " + res.data.result.short_link);
        } else if (shortLink === 1) {
          console.log("my response: " + res.data.result.short_link2);
        } else {
          console.log("my response: " + res.data.result.short_link3);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleClick = (e) => {
    let idButton = e.target.id;
    console.log("id button: " + idButton);

    if (idButton === "btn1") {
      setShortLink(0);
    } else if (idButton === "btn2") {
      setShortLink(1);
    } else {
      setShortLink(2);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitBtn} className="input">
        <p>Enter a Link:</p>
        <input
          type="text"
          placeholder="example.com"
          onChange={(e) => setLinkInput(e.target.value)}
        />
        <button type="submit">
          <ArrowRightAltIcon />
        </button>
      </form>
      <div class="btn-group" role="group" aria-label="Basic example">
        <p> Short domain: </p>
        <button
          id="btn1"
          type="button"
          class="btn btn-secondary"
          onClick={handleClick}
        >
          shrtco.de
        </button>
        <button
          id="btn2"
          type="button"
          class="btn btn-secondary"
          onClick={handleClick}
        >
          9qr.de
        </button>
        <button
          id="btn3"
          type="button"
          class="btn btn-secondary"
          onClick={handleClick}
        >
          shiny.link
        </button>
      </div>
    </div>
  );
};
