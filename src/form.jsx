import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
  return <form onSubmit={event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);
  }}>
    <Form.Field>
      <Form.Label>Name</Form.Label>
      <Form.Control>
        <Form.Input
          color="black"
          name="username"
        />
        <Icon align="left" size="small">
          <i className="fas fa-user" />
        </Icon>
      </Form.Control>
    </Form.Field>

    <Form.Field>
      <Form.Label>Email</Form.Label>
      <Form.Control>
        <Form.Input
          color="black"
          name="email"
        />
        <Icon align="left" size="small">
          <i className="fas fa-envelope" />
        </Icon>
      </Form.Control>
    </Form.Field>

    <Form.Field>
      <Form.Control>
        <Form.Label> Message</Form.Label>
        <div class="msgbox">
        <Form.Textarea
          color="black"
          name="message"
          id="subject"
          style="height:3em"
        />
        </div>
      </Form.Control>
      </Form.Field>

    <Form.Field kind="group">
      <Form.Control>
        <Button color="link">Submit <style>"padding: 1em"</style> </Button>
      </Form.Control>
    </Form.Field>
  </form>
}