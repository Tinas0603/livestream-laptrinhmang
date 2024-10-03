
import { Wrapper } from "../wrapper";
import { Navigation } from "./navigation";
import { Toggle } from "./toggle";

export const Sidebar = () => {
    return (
        <Wrapper>
            <Toggle />
            <Navigation />
        </Wrapper>
    );
};