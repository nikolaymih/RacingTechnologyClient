import { Button, Collapse } from 'antd';
import './Faq.css';

const Faq = () => {
    const { Panel } = Collapse;
    return (
        <section className="faq">
            <h3>FREQUENTLY ASKED QUESTIONS</h3>
            <Collapse className='mainCollapse' defaultActiveKey={['1']} accordion={true}>
                <Panel header="Should I consider using synthetic motor oil?" key="1">
                    <p>Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
                </Panel>
                <Panel header="What parts should be replaced at what intervals?" key="2">
                    <p>Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
                </Panel>
                <Panel header="How do I keep track of routine maintenance?" key="3">
                    <p>Synthetic engine oils are produced through a synthesis process that takes very small molecules and assembles them into larger designer molecules with premium lubricating properties.</p>
                </Panel>
            </Collapse>
            <p className='emailSupport'>Want quick support?</p>
            <Button size='large'>Email your question here</Button>
        </section>
    )
}

export default Faq;