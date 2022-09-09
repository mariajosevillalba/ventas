import React from "react";
import Layout from "../Components/Layout";

const Clientes=() =>{
    return( 
        <Layout>
        <div className="panle">
            <div className="panel-heading" align="center">
                Clientes
            </div>
            <div className="box" align="center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            <th>Email</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Maria</td>
                            <td>Villalba</td>
                            <td>Mz D Casa 2</td>
                            <td>38765</td>
                            <td>Maria@mail.com</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Sara</td>
                            <td>Valdes</td>
                            <td>Mz A Casa 5</td>
                            <td>39875</td>
                            <td>Sara@mail.com</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Alejandra</td>
                            <td>Molina</td>
                            <td>Mz H Casa 13</td>
                            <td>37654</td>
                            <td>Alejandra@mail.com</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Paula</td>
                            <td>Hernandez</td>
                            <td>Mz Y Casa 8</td>
                            <td>38764</td>
                            <td>Paula@mail.com</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Diana</td>
                            <td>Arango</td>
                            <td>Mz Q Casa 7</td>
                            <td>38765</td>
                            <td>Diana@mail.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    </Layout>
    );
}
export default Clientes;