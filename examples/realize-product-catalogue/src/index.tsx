import * as React from "react";
import * as ReactDOM from "react-dom";
import * as RealizeBootstrap from "@realize/theme-bootstrap";
import * as RealizeMaterialUI from "@realize/theme-materialui";

const themes = {
    bootstrap: RealizeBootstrap,
    materialui: RealizeMaterialUI,
};

const defaultFormData = {
    sku: null,
    name: null,
};

const App = () => {
    const [Realize, setRealize] = React.useState(RealizeBootstrap);
    const [formData, setFormData] = React.useState(defaultFormData);
    const [items, setItems] = React.useState([]);

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
                        {items.map(item => (
                            <Realize.TableRow key={item.id}>
                                <Realize.TableCell>{item.id}</Realize.TableCell>
                                <Realize.TableCell>{item.sku}</Realize.TableCell>
                                <Realize.TableCell>{item.name}</Realize.TableCell>
                            </Realize.TableRow>
                        ))}
                    </Realize.TableBody>
                </Realize.Table>
            </Realize.Shadow>
            <Realize.Shadow>
                <form onSubmit={(e) => (e.preventDefault(), setItems([ ...items, { ...formData, id: items.length + 1 } ]), setFormData(defaultFormData))}>
                    <Realize.Input
                        placeholder="Product SKU"
                        value={formData.sku || ""}
                        required
                        error={!/^[A-Za-z0-9-]+$/.test(formData.sku)}
                        onChange={e => setFormData({ ...formData, sku: e.target.value })}
                    />
                    <Realize.Input
                        placeholder="Product Name"
                        value={formData.name || ""}
                        required
                        error={formData.name && formData.name.length < 3}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                    <Realize.Button type="submit">Add</Realize.Button>
                </form>
            </Realize.Shadow>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
