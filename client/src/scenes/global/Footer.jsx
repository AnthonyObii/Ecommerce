import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const { palette: { neutral } } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
        rowGap="20px" 
        columnGap="clamp(20px, 30px, 100px)"
        maxWidth="1200px"
        marginX="auto"
        paddingX="20px"
      >
        <Box flex="1 1 calc(33.33% - 30px)" minWidth="200px" mb="20px">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="10px" 
            color={shades.secondary[500]}
          >
            BFW
          </Typography>
          <Typography>
            BFW is a versatile fashion brand that caters to a wide range of consumers.
             The genesis of this brand stems from an unwavering passion for chic and trendy footwear.
            BFW prides itself on presenting a striking array of leather products, including shoes, sandals, slippers, belts, and wallets, which offer exceptional value without breaking the bank.
          </Typography>
        </Box>

        <Box flex="1 1 calc(33.33% - 30px)" minWidth="200px" ml="1\
        0px">
          <Typography variant="h4" fontWeight="bold" mb="10px">
            Contact Us
          </Typography>
          <Box display="flex" flexDirection="row" gap="10px">
            <a
              href="https://instagram.com/bamzy_footwearbfw?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>
                <InstagramIcon />
              </Typography>
            </a>
            <a href="mailto:Bamzy96@gmail.com?">
              <Typography>
                <EmailIcon />
              </Typography>
            </a>
            <a href="https://wa.me/+2349056930828">
              <Typography>
                <WhatsAppIcon />
              </Typography>
            </a>
          </Box>
        </Box>

        <Box flex="1 1 calc(33.33% - 30px)" minWidth="200px" mb="20px">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="10px" 
            color={shades.secondary[500]}
          >
            Mission Statement
          </Typography>
          <Typography>
            Crafting high-quality footwear that meets the unique needs and preferences of our customers.
            We strive to provide exceptional customer service, using only the finest materials and traditional techniques to create shoes that are both comfortable and stylish.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
