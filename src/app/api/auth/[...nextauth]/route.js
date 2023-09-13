import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '@/utils/db';
import User from '@/app/models/User';
import bcrypt from 'bcrypt';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = bcrypt.compare(
              credentials.password,
              user.passworc
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong Password!');
            }
          } else {
            throw new Error('User not found!');
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
