import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export default function Home() {
    const { user } = useUser();
    
    return (
        <div> 
            <h1> 
                <pre>{JSON.stringify(user, null, 2)}
                </pre>    
            </h1>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();