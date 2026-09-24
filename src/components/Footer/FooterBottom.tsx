
function FooterBottom() {

    return (
        <div className="container mx-auto flex justify-between py-5 border-t border-t-brand-border">
            <div>
                <p className="text-brand-footer-text text-sm">© 2026 Dev Stack. All rights reserved.</p>
            </div>

            <div>
                <ul className="flex gap-3 text-brand-footer-text text-sm">
                    <li>
                        <a href="#">Privacy</a>
                    </li>

                    <li>
                        <a href="#">Terms</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}


export default FooterBottom;