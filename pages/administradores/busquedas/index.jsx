import Link from "next/link";
import Layout from "../../../components/layouts/MainLayout";
import Card from "../../../components/Card";
import { privatePage } from "../../../lib/ironSessionConfig";

const Busquedas = ({ user }) => {

    return <Layout title='Busquedas' user={user} >
        <Card>
            <div className="grid grid-cols-5 gap-5 auto-rows-auto">
                <Link
                    href={"/administradores/busquedas/tabla_alumnos"}
                    className="aspect-square rounded-md border-2 border-gray-300 grid place-content-center"
                >
                    <span className=" text-5xl text-center">
                        Usuarios
                        <label className="material-icons text-9xl text-gray-800 items-center">
                            group
                        </label>
                    </span>

                </Link>
                {

                }
            </div>
        </Card>
    </Layout>

};

export const getServerSideProps = privatePage(async (context) => {
    const user = context.req.session.user;
    if (!user) {
        return {
            redirect: {
                destination: "/api/logout",
                permanent: false,
            },
        };
    }

    return { props: { user } }
});

export default Busquedas;