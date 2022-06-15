import "./style.css";
import { Button, Link } from "@mui/material";
import { selectToken } from "../../store/user/selectors";
import { useSelector } from "react-redux";

const HomePageMessage = () => {
  const token = useSelector(selectToken);

  return (
    <div className="messageCard">
      <div className="titleStyle">
        <h1>Tamagotchi Club!</h1>
        <h3>A project that was born from a simple concept: Love</h3>
      </div>
      <div className="textStyle">
        <p>
          But how is that related to love, you are probably asking yourself,
          right?
        </p>
        <p>
          Normally the first idea we have from love is the romantic one, but the
          core thing is: Love is caring. And caring is love! Thinking about
          that, Tamagotchi Club was born.
        </p>
        <p>
          Here is a place where you can share your love for your Tamagotchi with
          others, create a club and keep in contact easily with people you like,
          as well keep track of how your virtual pet is going!
        </p>
        <p>
          Apart from that, you can check Tips and Tricks on how to always take
          better care of you little Tamagotchi, see what kind of evolution you
          have and spread love and caring even more, day by day.
        </p>
        {!token && (
          <Link href="/signup" underline="none">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#E3E958",
                color: "#5D3C76",
                textTransform: "none",
              }}
            >
              Come and be part of the club!
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export { HomePageMessage };
