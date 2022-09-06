import { Button, Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';

import './ProvidedServices.css';

const ProvidedServices = () => {
    return (
        <section className="prServicesOverview">
            <h3>AUTO REPAIR SERVICES</h3>
            <p>We offer a full range of garage services to vehicle owners located in Shumen area.
                Our professinals know how to handle a wide range of car services.
            </p>
            <div className="prServicesLink">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="example" src="https://media.istockphoto.com/photos/woman-repairing-a-car-in-auto-repair-shop-picture-id1175888628?b=1&k=20&m=1175888628&s=170667a&w=0&h=Smbx4a_kgRG1tSNK1P3OavEE8GqfSk--ItToJwZAAQM=" />}
                        >
                            <Meta title="ENGINE DIAGNOSTICS" />
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="example" src="https://www.carkeys.co.uk/media/1632/how_does_engine_oil_work_3.jpg" />}
                        >
                            <Meta title="LUBE, OIL AND FILTERS" />
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="example" src="http://carservice.webps.info/assets/themes/carservice/images/samples/870x580/image_04.jpg" />}
                        >
                            <Meta title="AIR CONDITIONING" />
                        </Card>
                    </Col>
                </Row>
            </div>
            <Button size={'large'} color='blue'>View All Services</Button>
        </section>
    )
}

export default ProvidedServices;