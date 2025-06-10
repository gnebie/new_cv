// ServiceMissionCard.tsx
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Tag,
  Icon,
  Button,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaClock, FaCheckCircle } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionIcon = motion(Icon);

export default function ServiceMissionCard({
  index,
  title,
  tagline,
  description,
  details,
  pour,
  valeur,
  duration,
  image,
  icon,     // rendre optionnel
  onClick,  // rendre optionnel
}: {
  index: number,
  title: string,
  tagline: string,
  description: string,
  details?: string | string[],
  pour?: string,
  valeur?: string,
  duration?: string,
  image?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any,         // ajouter "?" ici
  onClick?: () => void // ajouter "?" ici
}) {
  const bgColor = useColorModeValue("white", "gray.800");
  const accentColor = useColorModeValue("primary.500", "secondary.500");

  return (
    <MotionBox
      as={Flex}
      direction={{ base: "column", md: index % 2 === 0 ? "row-reverse" : "row" }}
      bg={bgColor}
      boxShadow="md"
      borderRadius="lg"
      overflow="hidden"
      whileHover={{ scale: 1.03, boxShadow: "xl" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* — Bandeau coloré à gauche */}
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        width="4px"
        bg={accentColor}
      />

      {/* — Badge numéroté */}
      <Box
        position="absolute"
        top={2}
        left={6}
        bg={accentColor}
        color="white"
        px={2}
        py={1}
        borderRadius="md"
        fontSize="sm"
        fontWeight="bold"
      >
        {/* {index} */}

        {title}
      </Box>
      {/* — Image */}
      {image && (
        <Box flex="1" minW={{ md: "40%" }}>
          <Image
            src={image}
            alt={title}
            objectFit="cover"
            width="100%"
            height={{ base: "200px", md: "100%" }}
          />
        </Box>
      )}

      {/* — Contenu */}
      <VStack
        flex="2"
        spacing={4}
        align="start"
        p={{ base: 6, md: 10, lg: 14 }}
        pl={{ md: image ? 8 : 6 }}
        pr={{ md: image ? 8 : 6 }}
      >
        {/* Icone + titre */}
        <HStack spacing={2}>
          {icon && (
            <MotionIcon
              as={icon}
              boxSize={6}
              color={accentColor}
              whileHover={{ scale: 1.2 }}
              transition={{ yoyo: Infinity, duration: 0.8 }}
            />
          )}
          <Heading as="h3" size="lg" color={accentColor}>
            {title}
          </Heading>
        </HStack>
        <br/>

        {/* Tagline */}
        {tagline && (
          <Text fontStyle="italic" opacity={0.8} fontSize="md">
            {tagline}
          </Text>
        )}

        {/* Description courte */}
        <Text fontSize="md" lineHeight="1.5">
          {/** on peut mettre des **gras** autour des mots-clés */}
          {description.split(" ").map((word, i) =>
            /MVP|IA|CI\/CD/.test(word) ? (
              <Text as="b" key={i}>
                {word}{" "}
              </Text>
            ) : (
              word + " "
            )
          )}
        </Text>

        {/* Détails sous forme de puces iconées */}
        {details && Array.isArray(details) ? (
          <VStack align="start" spacing={1}>
            {details.map((point, i) => (
              <HStack key={i} spacing={2}>
                <FaCheckCircle color={accentColor} />
                <Text fontSize="sm">{point}</Text>
              </HStack>
            ))}
          </VStack>
        ) : details ? (
          <Text fontSize="sm" opacity={0.85}>
            {details}
          </Text>
        ) : null}

        {/* Pour qui */}
        {pour && (
          <Wrap>
            {pour.split(",").map((aud, i) => (
              <WrapItem key={i}>
                <Tag size="sm" colorScheme="blue" variant="subtle">
                  {aud.trim()}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        )}

        {/* Valeur */}
        {valeur && (
          <Text fontSize="sm" opacity={0.9}>
            ✅ {valeur}
          </Text>
        )}

        {/* Durée */}
        {duration && (
          <HStack>
            <FaClock color={accentColor} />
            <Text fontSize="sm">À partir de : {duration}</Text>
          </HStack>
        )}

        {/* CTA interne */}
        {onClick && (
          <Button size="sm" colorScheme="primary" onClick={onClick}>
            En discuter
          </Button>
        )}
      </VStack>
    </MotionBox>
  );
}
