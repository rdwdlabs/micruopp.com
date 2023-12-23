import Layout from '../components/layout';
import Link from 'next/link';

/**
 * Planning to use nodemailer and my gmail account to send the email.
 * https://dev.to/wpickeral/building-a-contact-form-with-nextjs-and-nodemailer-4emp
 * https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
 * https://medium.com/the-couch/adding-a-contact-form-to-your-next-js-app-7a1b5f63f27
 * https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
 */
export default function Contact() {
  let pageName = "contact";
  return (
    <Layout pageName={pageName}>
      <div>
        <form>
          <label htmlFor="contact-email">Email</label>
          <input type="text" id="contact-email" name="contact-email" />
          <label htmlFor="contact-subject">Subject</label>
          <input type="text" id="contact-subject" name="contact-subject" />
          <label htmlFor="contact-message">Message</label>
          <textarea type="text" id="contact-message" name="contact-message" />
          <button type="submit" value='Submit'>Send</button>
        </form>
      </div>
    </Layout>
  );
}
