import "./style.css";

const TipsAndTricks = () => {
  return (
    <div>
      <div className="tama-animation">
        <img className="tama-img" src="/assets/tama.png" alt="" />
      </div>
      <div className="hero">
        <h1>Tamagotchi Evolutions</h1>
      </div>
      <div className="tipsCard">
        <table>
          <tbody>
            <tr>
              <td>Babytchi</td>
              <td>
                <div>
                  <img src="/assets/BabyA.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Baby</td>
              <td>
                <ul>
                  <li>Egg</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Hatches from egg after 5 minutes.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Marutchi</td>
              <td>
                <div>
                  <img src="/assets/Marutchi_tah.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Child</td>
              <td>
                <ul>
                  <li>Babytchi</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Evolves after 65 minutes.</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Tamatchi</td>
              <td>
                <div>
                  <img src="/assets/rosa.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Teen</td>
              <td>
                <ul>
                  <li>Marutchi</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Good care</li>
                  <li>Type one requires 75% discipline</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Kuchitamatchi</td>
              <td>
                <div>
                  <img src="/assets/laranja.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Teen</td>
              <td>
                <ul>
                  <li>Marutchi</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Bad care</li>
                  <li>Type one requires 75% discipline</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Mametchi</td>
              <td>
                <div>
                  <img src="/assets/bebe.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Adult</td>
              <td>
                <ul>
                  <li>Tamatchi - high discipline</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Perfect care</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Ginjirotchi</td>
              <td>
                <div>
                  <img src="/assets/blue.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Adult</td>
              <td>
                <ul>
                  <li>Tamatchi - high discipline</li>
                  <li>Tamatchi - low discipline</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Above average care from a type one Tamatchi</li>
                  <li>Perfect care from a type two Tamatchi</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Maskutchi</td>
              <td>
                <div>
                  <img src="/assets/roxo.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Adult</td>
              <td>
                <ul>
                  <li>Tamatchi - high discipline</li>
                  <li>Tamatchi - low discipline</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Average care from a type one Tamatchi</li>
                  <li>Above average care from a type two Tamatchi</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Kuchipatchi</td>
              <td>
                <div>
                  <img src="/assets/verde.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Adult</td>
              <td>
                <ul>
                  <li>Tamatchi - high discipline</li>
                  <li>Kuchitamatchi - high discipline</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Below average care from Tamatchi</li>
                  <li>Perfect care from Kuchitamatchi</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Nyorotchi</td>
              <td>
                <div>
                  <img src="/assets/azul.webp" alt="" />
                </div>
              </td>
              <td></td>
              <td>Adult</td>
              <td>
                <ul>
                  <li>Tamatchi</li>
                  <li>Kuchitamatchi</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Bad care from Tamatchi</li>
                  <li>Average care from a type one Kuchitamatchi</li>
                  <li>Good care from a type two Kuchitamatchi</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer">
        <div>
          <p>You can get yours here </p>
        </div>
        <div>
          <a
            href="https://www.nedgame.nl/zoek/zoek:tamagotchi/&sorteer=relevantie"
            target="_blank"
            rel="noreferrer"
          >
            <img className="gif" src="/assets/gif.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export { TipsAndTricks };
