import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as Realize from "./shared/realize";
import { ProductsModule } from "./products";

type themes = "bootstrap" | "materialui";

const storage = {
    usePersistedState<T>(name, initialState: T = null): [T, React.Dispatch<React.SetStateAction<T>>] {
        const [data, setData] = React.useState<T>(() => {
            const data = JSON.parse(localStorage.getItem(name) || JSON.stringify(initialState));
            localStorage.setItem(name, JSON.stringify(data));
            return data;
        });

        return [
            data,
            (newData) => {
                localStorage.setItem(name, JSON.stringify(newData));
                return setData(newData);
            },
        ];
    }
};

const App = () => {
    const [theme, setTheme] = storage.usePersistedState<themes>("theme", "bootstrap");
    const onChange = v => setTheme((v.target as HTMLSelectElement).value as themes);
    // @ts-ignore
    const baseUrl = new URL(document.getElementsByTagName("base")[0].href);

    return (
        <Router basename={baseUrl.pathname}>
            <Realize.Realize themeName={theme}>
                <div style={{ margin: '10px' }}>
                    <select value={theme} onChange={onChange} onBlur={onChange}>
                        <option value="bootstrap">Bootstrap</option>
                        <option value="materialui">MaterialUI</option>
                    </select>
                </div>
                <ProductsModule storage={storage} />
            </Realize.Realize>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
