import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

export default function Page404() {
    const storedName = localStorage.getItem('name');
    
    return (
        <div className="account-pages my-5 pt-5">
            <ParticleBackground />
            <div className="text-center mb-5 mt-3">
                <h1 className="display-2 fw-medium text-white">
                    <span>404</span>
                </h1>
                <h4 className="text-uppercase text-white">Maaf, halaman tidak ditemukan !</h4>
                <div className="mt-5 text-center">
                    <Link className="btn btn-outline-primary" to={`${storedName ? '/ryanporto/panel' : '/ryanporto'}`}>
                        <span>Go Back</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
