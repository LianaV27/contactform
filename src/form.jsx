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
          color="success"
          name="username"
        />
        <Icon align="left" size="small">
          <i className="fas fa-user" />
        </Icon>
        <Icon align="right" size="small">
          <i className="fas fa-check" />
        </Icon>
      </Form.Control>
      <Form.Help color="success">This username is available</Form.Help>
    </Form.Field>

    <Form.Field>
      <Form.Label>Email</Form.Label>
      <Form.Control>
        <Form.Input
          color="danger"
          name="email"
        />
        <Icon align="left" size="small">
          <i className="fas fa-envelope" />
        </Icon>
        <Icon align="right" size="small">
          <i className="fas fa-exclamation-triangle" />
        </Icon>
      </Form.Control>
    </Form.Field>

    <Field>
      <Control>
        <Textarea
          placeholder="I am a textarea"
        />
      </Control>
    </Field>

    <Form.Field kind="group">
      <Form.Control>
        <Button color="link">Submit</Button>
      </Form.Control>
      <Form.Control>
        <Button color="link" colorVariant="light">
          Cancel
        </Button>
      </Form.Control>
    </Form.Field>

  </form>
}