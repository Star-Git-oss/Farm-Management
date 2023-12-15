import React from "react";
import { Accordion, Container, Table } from "react-bootstrap";

const Blog = () => {
    return (
        <div>
            <Container>
                <div className="question01">
                    <h2 className="py-4">
                        01. Difference between Javascript & Nodejs
                    </h2>
                    <Table bordered hover>
                        <thead>
                            <tr className="bg-warning bordered">
                                <th>JavaScript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody className="text-start">
                            <tr>
                                <td>
                                    JavaScript is a interpreted, or just-in-time
                                    compiled programming language that is used
                                    for writing scripts on the website.
                                </td>
                                <td>
                                    Node.js is an cross-platform and back-end
                                    JavaScript runtime environment.
                                </td>
                            </tr>
                            <tr>
                                <td>You can run JavaScript only in browser.</td>
                                <td>
                                    With the help of NodeJS you can ran
                                    Javascript outside of the browser.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    JavaScript is uses for developing font side
                                    development.
                                </td>

                                <td>
                                    Nodejs is uses for server-side development.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="question02 py-4">
                    {/* <h2 className="py-4">
                        02. When should you use Nodejs and when should you use
                        Mongodb
                    </h2> */}
                    <Table bordered hover>
                        <thead>
                            <tr className="bg-warning bordered">
                                <th className="text-start">
                                    02. When should you use Nodejs and when
                                    should you use Mongodb
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-start">
                            <tr>
                                <td>
                                    You want to use Node.js when you need
                                    something very lightweight and standalone
                                    framework in node js if you want higher
                                    level abstraction then there is a large
                                    number of modules and the npm package
                                    manager.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    when you need something easiest for deploy,
                                    operate and Scale you should try mongoDB. It
                                    is also easy to use and its performance
                                    capabilities unbeatable compared to other
                                    database.
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="question03">
                    <h2 className="py-4">
                        03. Differences between sql and nosql databases.
                    </h2>
                    <Table bordered hover>
                        <thead>
                            <tr className="bg-warning bordered">
                                <th>SQL</th>
                                <th>noSQL</th>
                            </tr>
                        </thead>
                        <tbody className="text-start">
                            <tr>
                                <td>SQL databases are table-based.</td>
                                <td>NoSQL databases are non-relational.</td>
                            </tr>
                            <tr>
                                <td>
                                    SQL is the programming language used to
                                    interface with relational databases
                                </td>
                                <td>
                                    A NoSQL database has dynamic schema for
                                    unstructured data.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Great support is available for all SQL
                                    database from their vendors.
                                </td>

                                <td>
                                    Some NoSQL database you still have to rely
                                    on community support and only limited
                                    outside experts are available
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default Blog;
