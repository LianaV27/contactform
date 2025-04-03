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
      <Form.Label>Username</Form.Label>
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
        <Form.Input
          color="black"
          name="message"
        />
      </Form.Control>

    <Form.Field kind="group">
      <Form.Control>
        <Button color="link">Submit <style>"padding: 1em" </style> </Button>
      </Form.Control>
    </Form.Field>
    </Form.Field>
  </form>
}