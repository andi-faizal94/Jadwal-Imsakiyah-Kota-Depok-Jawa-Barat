import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col, Table } from "react-bootstrap";

function App() {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://imsakiyah-api.santrikoding.com/imsyakiyah?state=jHmGZN1Abw26OLYUFJ6CMC%252Ful%252BLn39My5vu1IDLVmKub%252F7amc%252F8KNWE78WDulWOS4xhiWYfcex3ErFjMTf10FQ%253D%253D&city=JZAUDUgYml%252BedFAxSHOJTD5RHebDcatgOX7tr5KiPmyO%252BzUwDYAV9oC7ZC5gufwopA2g3wWACOXf8RPQSOZoiw%253D%253D&year=2022"
      )
      .then((response) => {
        setTimes(response.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1 className="text-center text-primary">Loading ...</h1>;
  }
  if (error) {
    console.error("Error because", error);
  }
  return (
    <Container className="mt-3 mb-3 bg-info">
      <div className="p-3 text-center ">
        <h1 className="text-white">Jadwal</h1>
        <h1 className="text-white">Imsakiyah</h1>
        <h2 className="text-white">Kota Depok</h2>
        <h2 className="text-white">Jawa Barat</h2>
        <h2 className="text-white">Ramadhan 1443 H/2022 M</h2>
      </div>
      <Row className="mt-4 mb-2">
        <Col md="{12}">
          <Card className="mb-4 border-0 rounded shadow-sm">
            <Card.Body className="mb-1">
              <Table responsive striped bordered hover className="table">
                <thead className="mb-2 table-danger">
                  <tr>
                    <th className="text-center">No.</th>
                    <th className="text-center">Ramadhan</th>
                    <th className="text-center">Tanggal</th>
                    <th className="text-center">Imsyak</th>
                    <th className="text-center">Subuh</th>
                    <th className="text-center">Terbit</th>
                    <th className="text-center">Dhuha</th>
                    <th className="text-center">Dzuhur</th>
                    <th className="text-center">Ashar</th>
                    <th className="text-center">Maghrib</th>
                    <th className="text-center">Isya</th>
                  </tr>
                </thead>
                <tbody>
                  {times.map((time, index) => (
                    <tr key={index}>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">
                        {index + 1} Ramadhan 1443 H
                      </td>
                      <td className="text-center">{time.date}</td>
                      <td className="text-center">{time.imsak}</td>
                      <td className="text-center">{time.subuh}</td>
                      <td className="text-center">{time.syuruk}</td>
                      <td className="text-center">{time.dhuha}</td>
                      <td className="text-center">{time.dzuhur}</td>
                      <td className="text-center">{time.ashar}</td>
                      <td className="text-center">{time.maghrib}</td>
                      <td className="text-center">{time.isya}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
