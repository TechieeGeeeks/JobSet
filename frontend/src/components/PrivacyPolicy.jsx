import React from "react";
import {
  Container,
  Heading,
  Paragraph,
  List,
  ListItem,
  Link,
} from "tailwindcss/react";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Heading as="h2">Protecting privacy on your devices</Heading>
      <Paragraph>
        Here are the highlights of our privacy policy.
      </Paragraph>
      <List>
        <ListItem>
          <Heading as="h3">Personally identifiable information</Heading>
          <Paragraph>
            We collect personally identifiable information, such as your name, email address, and phone number, when you create an account or use our services.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Heading as="h3">Collection</Heading>
          <Paragraph>
            We collect your personally identifiable information when you create an account, use our services, or interact with our website.
          </Paragraph>
        </ListItem>
      </List>
    </Container>
  );
};

export default PrivacyPolicy;
