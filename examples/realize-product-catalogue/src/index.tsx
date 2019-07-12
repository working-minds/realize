import * as React from "react";
import * as ReactDOM from "react-dom";
import * as RealizeBootstrap from "@realize/theme-bootstrap";
import * as RealizeMaterialUI from "@realize/theme-materialui";

const themes = {
    bootstrap: RealizeBootstrap,
    materialui: RealizeMaterialUI,
};

const App = () => {
    const [Realize, setRealize] = React.useState(RealizeBootstrap);

    return (
        <div>
            <div style={{ margin: '10px' }}>
                <select onInput={v => setRealize(themes[(v.target as HTMLSelectElement).value])}>
                    <option value="bootstrap">Bootstrap</option>
                    <option value="materialui">MaterialUI</option>
                </select>
            </div>
            <Realize.Shadow>
                <Realize.Table size="medium">
                    <Realize.TableHead>
                        <Realize.TableRow>
                            <Realize.TableCell>ID</Realize.TableCell>
                            <Realize.TableCell>SKU</Realize.TableCell>
                            <Realize.TableCell>NAME</Realize.TableCell>
                        </Realize.TableRow>
                    </Realize.TableHead>
                    <Realize.TableBody>
                        <Realize.TableRow>
                            <Realize.TableCell>1</Realize.TableCell>
                            <Realize.TableCell>sku-01</Realize.TableCell>
                            <Realize.TableCell>Notebook Samsung</Realize.TableCell>
                        </Realize.TableRow>
                        <Realize.TableRow>
                            <Realize.TableCell>2</Realize.TableCell>
                            <Realize.TableCell>sku-02</Realize.TableCell>
                            <Realize.TableCell>Macbook</Realize.TableCell>
                        </Realize.TableRow>
                        <Realize.TableRow>
                            <Realize.TableCell>1</Realize.TableCell>
                            <Realize.TableCell>sku-03</Realize.TableCell>
                            <Realize.TableCell>Notebook HP</Realize.TableCell>
                        </Realize.TableRow>
                    </Realize.TableBody>
                </Realize.Table>
            </Realize.Shadow>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
