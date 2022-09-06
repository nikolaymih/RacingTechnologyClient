import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './Services.css'

const CarServices = () => {
    return (
        <section className="carServices">
            <div className="carServicesHeading">
                <h3>Services</h3>
            </div>
            <div className='carServicesInfo'>
                <Row className='carServiceFirstRow' gutter={16}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 380 }}
                            cover={<img alt="example" src="http://carservice.webps.info/assets/themes/carservice/images/samples/870x580/image_01.jpg" />}
                        >
                            <Meta title="ENGINE DIAGNOSTICS" />
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 380 }}
                            cover={<img alt="example" src="https://www.carkeys.co.uk/media/1632/how_does_engine_oil_work_3.jpg" />}
                        >
                            <Meta title="LUBE, OIL AND FILTERS" />
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 380 }}
                            cover={<img alt="example" src="http://carservice.webps.info/assets/themes/carservice/images/samples/870x580/image_04.jpg" />}
                        >
                            <Meta title="AIR CONDITIONING" />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card
                            hoverable
                            style={{ width: 380 }}
                            cover={<img alt="example" src="http://carservice.webps.info/assets/themes/carservice/images/samples/870x580/image_06.jpg" />}
                        >
                            <Meta title="TIRE AND WHEEL SERVICES" />
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 380 }}
                            cover={<img alt="example" src="http://carservice.webps.info/assets/themes/carservice/images/samples/870x580/image_05.jpg" />}
                        >
                            <Meta title="BRAKE REPAIR" />
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            hoverable
                            style={{ width: 380 }}
                            cover={<img alt="example" src="http://carservice.webps.info/assets/themes/carservice/images/samples/870x580/image_03.jpg" />}
                        >
                            <Meta title="BELTS AND HOSES" />
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default CarServices;