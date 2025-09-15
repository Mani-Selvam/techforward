import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DemandBanner() {
    return (
        <motion.div 
            className="fixed bottom-0 left-0 right-0 z-50 bg-destructive text-destructive-foreground py-4 px-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            data-testid="demand-banner"
        >
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="text-lg font-bold" data-testid="text-high-demand">
                        HIGH DEMAND
                    </div>
                    <div className="text-base" data-testid="text-price-increase">
                        PRICES WILL INCREASE SOON
                    </div>
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        size="lg"
                        className="orange-glow font-bold"
                        data-testid="button-buy-tickets-banner"
                    >
                        BUY TICKETS
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
}